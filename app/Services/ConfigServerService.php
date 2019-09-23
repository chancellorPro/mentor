<?php

namespace App\Services;

use App\Exceptions\ConfigServer\UrlNotFoundException;
use GuzzleHttp\Client;
use Log;

/**
 * Class ConfigServerService
 */
class ConfigServerService
{

    /**
     * Config server url
     *
     * @var string
     */
    private $configServerUrl = '';

    /**
     * HTTP Client
     *
     * @var Client|null
     */
    private $client = null;

    /**
     * ConfigServerService constructor.
     *
     * @param string $env Environment
     *
     * @throws UrlNotFoundException
     */
    public function __construct(string $env)
    {
        $this->configServerUrl = env('HTTP_SERVER_URL_' . strtoupper($env));

        if (empty($this->configServerUrl)) {
            throw new UrlNotFoundException;
        }

        $this->client = new Client(['base_uri' => $this->configServerUrl]);
    }

    /**
     * Configs updated
     *
     * @return boolean
     */
    public function configUpdated():bool
    {
        return $this->head('configsUpdated');
    }

    /**
     * Clear cache of the user
     *
     * @param integer $userId User ID
     *
     * @return boolean
     */
    public function resetCache(int $userId):bool
    {
        return $this->head('resetCache', [
            'userID' => $userId,
        ]);
    }

    /**
     * Send push notification to user
     *
     * @param string $userIds
     * @return boolean
     */
    public function userPush(string $userIds):bool
    {
        return $this->head('userPush', [
            'userIDs' => $userIds,
        ]);
    }

    /**
     * Maintenance
     *
     * status:
     *      0 - Jenkins job began
     *      1 - Jenkins job completed
     *
     * @param array $query Query
     *
     * @return boolean
     */
    public function maintenance(array $query = []):bool
    {
        return $this->head('maintenance', $query);
    }

    /**
     * Stats db structure update
     *
     * @return boolean
     */
    public function statsDbUpdated():bool
    {
        return $this->head('statsDBUpdate');
    }

    /**
     * HEAD method
     *
     * @param string $action Action
     * @param array  $query  Params
     *
     * @return boolean
     */
    private function head(string $action, array $query = []):bool
    {
        $time   = time();
        try {
            $response = $this->client->request('HEAD', $action, [
                'headers' => [
                    'X-SIG' => md5(env('HTTP_SERVER_SECRET') . $action . $time),
                ],
                'query'   => array_merge([
                    't' => $time,
                ], $query),
            ]);

            if ($response->getStatusCode() == 200) {
                return true;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }

        return false;
    }

}
