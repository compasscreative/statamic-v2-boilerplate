<?php

namespace Statamic\Addons\VideoDemo;

use Statamic\Extend\Widget;

class VideoDemoWidget extends Widget
{
    /**
     * The HTML that should be shown in the widget
     *
     * @return string
     */
    public function html()
    {
        $file = $this->get('videofile');

        return '
        <div>
            <header><h2>First time here?</h2><p><a target="_blank" class="underline" href="'.$file.'">Watch the training video</a> to get acquainted with editing this site.</p></header>
        </div>';
    }
}
