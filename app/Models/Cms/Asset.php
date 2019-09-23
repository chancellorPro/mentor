<?php

namespace App\Models\Cms;

use App\Models\User\UserAsset;
use App\Traits\PstMutator;
use Illuminate\Support\Facades\Auth;
use App\Services\FileService;
use DB;
use Carbon\Carbon;
use App\Models\DeployModel;

/**
 * Asset
 */
class Asset extends DeployModel
{

    use PstMutator;

    /**
     * Deploy category
     *
     * @var string
     */
    public static $deployCategory = 'assets';

    /**
     * Deploy order
     *
     * @var integer
     */
    public static $deployOrder = 30;

    /**
     * Deploy dependency
     *
     * @var array
     */
    public static $deployDependency = [
        ActionTypeAttribute::class,
        ActionTypeState::class,
        ActionType::class
    ];

    /**
     * Possible deploy directions
     *
     * @var array
     */
    public static $deployDirections = [
        'dev-stage',
        'stage-live',
    ];

    /**
     * Default values
     *
     * @var array
     */
    protected $attributes = [
        'cash_price'  => 0,
        'coins_price' => 9000,
        'name'        => 'Untitled item',
    ];

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'created_by',
        'updated_by',
        'name',
        'cash_price',
        'coins_price',
        'type',
        'subtype',
        'action_type_id',
        'sell_status',
        'preview_url',
        'version',
        'collection_number',
        'created_at',
        'sort_order',
        'sell_end',
        'sell_start',
        'is_manual_sell_status',
    ];

    /**
     * Deploy ignore fields
     *
     * @var array
     */
    private $deployIgnoreFields = [
        'stage' => [
            'name',
            'cash_price',
            'coins_price',
            'sell_end',
            'sell_start',
            'is_manual_sell_status',
        ],
    ];

    const SELL_STATUS_NEVER_SOLD  = 0;
    const SELL_STATUS_ON_SALE     = 1;
    const SELL_STATUS_WAS_ON_SALE = 2;
    const SELL_STATUS_IN_GAME     = 3;

    const SELL_STATUSES = [
        self::SELL_STATUS_NEVER_SOLD => 'Never sold',
        self::SELL_STATUS_ON_SALE => 'On sale',
        self::SELL_STATUS_WAS_ON_SALE => 'Was on sale',
        self::SELL_STATUS_IN_GAME => 'In Game'
    ];

    const ASSET_TYPE_FURNITURE       = 1;
    const ASSET_TYPE_CLOTHES         = 2;
    const ASSET_TYPE_BANNER          = 3;
    const ASSET_TYPE_LINKED          = 4;
    const ASSET_TYPE_BODY_PART       = 5;
    const ASSET_TYPE_COLLECTION_ITEM = 6;
    const ASSET_TYPE_FOOD_ITEM       = 7;
    const ASSET_TYPE_MEAL            = 8;
    const ASSET_TYPE_CROP            = 9;

    const ASSET_TYPE_ALIASES = [
        self::ASSET_TYPE_FURNITURE       => 'furniture',
        self::ASSET_TYPE_CLOTHES         => 'clothes',
        self::ASSET_TYPE_BANNER          => 'banner',
        self::ASSET_TYPE_LINKED          => 'linked',
        self::ASSET_TYPE_BODY_PART       => 'body_part',
        self::ASSET_TYPE_COLLECTION_ITEM => 'collection_item',
        self::ASSET_TYPE_FOOD_ITEM       => 'food_item',
        self::ASSET_TYPE_MEAL            => 'meal',
        self::ASSET_TYPE_CROP            => 'crop',
    ];

    const FILES_FOLDER = 'Assets/Preview';

    /**
     * For ignore action recording in ModelChangeObserver
     *
     * @var boolean
     */
    public $ignoreCmsLog = false;

    /**
     * Boot
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        // create a event to happen on updating
        static::updating(function ($table) {
            if (Auth::user()) {
                $table->updated_by = Auth::user()->id;
                $table->updated_at = Carbon::now();
            }
        });

        // create a event to happen on saving
        static::saving(function ($table) {
            if (Auth::user()) {
                $table->created_by = Auth::user()->id;
                $table->updated_by = Auth::user()->id;
                $table->updated_at = Carbon::now();
            }
        });
    }

    /**
     * Get upload folder
     *
     * @param string $env Env
     *
     * @return string
     */
    protected static function getUploadFolder(?string $env = null): string
    {
        if (!$env) {
            $env = environment();
        }
        return $env . '/' . self::FILES_FOLDER;
    }

    /**
     * Get asset bundle name
     * {AssetID}_{AssetVersion}
     *
     * @return string
     */
    public function getAssetBundleName()
    {
        return "{$this->id}_{$this->version}";
    }

    /**
     * Get asset bundle path
     *
     * @param string $bundleTypePath BundleTypePath
     * @param string $env            Env
     *
     * @return string
     */
    public function getAssetBundlePath(string $bundleTypePath, string $env = '')
    {
        if (!$env) {
            $env = environment();
        }

        $path = $env . "/Assets/" . self::ASSET_TYPE_ALIASES[$this->type] . "/$bundleTypePath";

        return $path;
    }

    /**
     * CmsUser relation. Created By
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createdBy()
    {
        return $this->belongsTo(CmsUser::class, 'created_by');
    }

    /**
     * NLA Assets relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function nlaAssets()
    {
        return $this->hasOne(NlaAsset::class, 'asset_id');
    }

    /**
     * CmsUser relation. Updated By
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function updatedBy()
    {
        return $this->belongsTo(CmsUser::class, 'updated_by');
    }

    /**
     * Subtype relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function assetSubtype()
    {
        return $this->belongsTo(Subtype::class, 'subtype');
    }

    /**
     * UserAsset relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userAssets()
    {
        return $this->hasMany(UserAsset::class);
    }

    /**
     * Award relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function awards()
    {
        return $this->hasMany(Award::class);
    }

    /**
     * AssetLocalization relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function assetLocalizations()
    {
        return $this->hasMany(AssetLocalization::class);
    }

    /**
     * ShopItem relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shopItems()
    {
        return $this->hasMany(ShopItem::class);
    }

    /**
     * Attribute relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function assetAttributes()
    {
        return $this->belongsToMany(Attribute::class, 'asset_attributes')->withPivot('value');
    }

    /**
     * AssetActionTypeState relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function assetStateAward()
    {
        return $this->hasMany(AssetActionTypeState::class);
    }

    /**
     * ActionType relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function actionType()
    {
        return $this->hasOne(ActionType::class, 'id', 'action_type_id');
    }

    /**
     * AssetActionTypeAttribute relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function assetActionTypeAttributes()
    {
        return $this->hasMany(AssetActionTypeAttribute::class, 'asset_id');
    }

    /**
     * Belongs to shops
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function belongsToShops()
    {
        return $this->belongsToMany(
            Shop::class,
            'shop_items',
            'asset_id',
            'shop_id',
            'id',
            'id'
        )->distinct('shop_id');
    }

    /**
     * Delete
     *
     * @return boolean|null|void
     * @throws \Exception Can't delete
     */
    public function delete()
    {
        FileService::delete($this->preview_url);
        parent::delete();
    }

    /**
     * Update asset attribute
     *
     * @param integer $assetID     Asset ID
     * @param integer $attributeID Attribute ID
     * @param mixed   $value       Attribute Value
     *
     * @return void
     */
    public static function attributeUpdate(int $assetID, int $attributeID, $value)
    {
        $sql = "
            INSERT INTO asset_attributes (`asset_id`, `attribute_id`, `value`)
            VALUES (?, ?, ?)
            ON DUPLICATE KEY UPDATE `value` = VALUES(`value`)";

        DB::insert($sql, [
            $assetID,
            $attributeID,
            $value,
        ]);

        self::find($assetID)->touch();
    }

    /**
     * Get last collection number (Collection ID)
     *
     * @return integer
     */
    public static function getLastCollectionNumber()
    {
        return (int) DB::table('assets')->max('collection_number');
    }

    /**
     * Has Gift wrap
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function giftWrap()
    {
        return $this->hasOne(AssetGiftWrap::class, 'asset_id', 'id');
    }

    /**
     * Get number of rows for deploy
     *
     * @return integer
     */
    public function rowsForDeploy()
    {
        return $this->select(DB::raw('count(*) as total'))->where(function ($query) {
            $query->whereRaw('deployed_at < updated_at')
                ->orWhereNull('deployed_at');
        })->whereNotNull('type')->first()->total;
    }

    /**
     * sell_start
     *
     * @return string
     */
    public function getSellStartToPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('sell_start'));
    }

    /**
     * sell_end
     *
     * @return string
     */
    public function getSellEndToPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('sell_end'));
    }
}
