<?php

namespace Statamic\Addons\CacheTidy;

use Illuminate\Support\Facades\Artisan;
use Statamic\Extend\Controller;

class CacheTidyController extends Controller
{
    /**
     * Maps to your route definition in routes.yaml
     *
     * @return mixed
     */
    public function index()
    {
        return $this->view('index');
    }

    public function cache()
    {
        $command = 'clear:cache';

        try {
            Artisan::call($command);
            $call = trim(Artisan::output());
            return back()->with('success', $call);
        } catch (\Exception $e) {
            Log::error('Problem running command: ' . $command);
            return back()->withErrors('error', ' There was a problem' . $e);
        }
    }

    public function glide()
    {
        $command = 'clear:glide';

        try {
            Artisan::call($command);
            $call = trim(Artisan::output());
            return back()->with('success', $call);
        } catch (\Exception $e) {
            Log::error('Problem running command: ' . $command);
            return back()->withErrors('error', ' There was a problem' . $e);
        }
    }

    public function stache()
    {
        $command = 'clear:stache';

        try {
            Artisan::call($command);
            $call = trim(Artisan::output());
            return back()->with('success', $call);
        } catch (\Exception $e) {
            Log::error('Problem running command: ' . $command);
            return back()->withErrors('error', ' There was a problem' . $e);
        }
    }

    public function staticCache()
    {
        $command = 'clear:static';

        try {
            Artisan::call($command);
            $call = trim(Artisan::output());
            return back()->with('success', $call);
        } catch (\Exception $e) {
            Log::error('Problem running command: ' . $command);
            return back()->withErrors('error', ' There was a problem' . $e);
        }
    }
}
