<?php


namespace App\Traits;


trait PstMutator
{

    /**
     * created_at
     *
     * @return string
     */
    public function getCreatedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('created_at'));
    }

    /**
     * updated_at
     *
     * @return string
     */
    public function getUpdatedAtPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('updated_at'));
    }

    /**
     * date_from
     *
     * @return string
     */
    public function getDateFromPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date_from'));
    }

    /**
     * Setter started_at
     *
     * @param $date
     */
    public function setDateFromPstAttribute($date)
    {
        $this->attributes['date_from'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * date_to
     *
     * @return string
     */
    public function getDateToPstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date_to'));
    }

    /**
     * Setter finished_at
     *
     * @param $date
     */
    public function setDateToPstAttribute($date)
    {
        $this->attributes['date_to'] = !empty($date) ? fromPacificToUTC($date) : null;
    }

    /**
     * date
     *
     * @return string
     */
    public function getDatePstAttribute()
    {
        return $this->toPacificTime($this->getOriginal('date'));
    }

    /**
     * Convertation helper
     *
     * @param $date
     * @return string
     */
    private function toPacificTime($date)
    {
        if (!empty($date)) {
            return toPacificTime($date);
        }

        return $date;
    }
}
