<?php

namespace Statamic\Addons\CacheTidy;

use Statamic\API\Nav;
use Statamic\Extend\Listener;

class CacheTidyListener extends Listener
{
    /**
     * The events to be listened for, and the methods to call.
     *
     * @var array
     */
    public $events = [
        'cp.nav.created' => 'addNavItems'
    ];

    public function addNavItems($nav)
    {
        $tidy = Nav::item('Cache Tidy')->route('addons.cache_tidy')->icon('flat-brush');

        $nav->addTo('tools', $tidy);
    }
}
