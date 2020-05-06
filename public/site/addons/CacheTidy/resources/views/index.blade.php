@extends('layout')

@section('content')
    <div class="flexy mb-3">
        <h1>Cache Tidy</h1>
    </div>
    <div class="card flush dossier-for-mobile">
        <div class="dossier-table-wrapper">
            <table class="dossier">
                <tbody>
                    <tr>
                        <td class="cell-name first-cell" style="width:200px;">
                            <span class="column-label">Name</span> <a href="{{ route('addons.clear_cache') }}">Clear Cache</a>
                        </td>
                        <td class="cell-description">
                            <span class="column-label">Description</span> Clear the application cache.
                        </td>
                        <td class="column-actions"></td>
                    </tr>
                    <tr>
                        <td class="cell-name first-cell">
                            <span class="column-label">Name</span> <a href="{{ route('addons.clear_glide') }}">Clear Glide</a>
                        </td>
                        <td class="cell-description">
                            <span class="column-label">Description</span> Clear the Glide image cache.
                        </td>
                        <td class="column-actions"></td>
                    </tr>
                    <tr>
                        <td class="cell-name first-cell">
                            <span class="column-label">Name</span> <a href="{{ route('addons.clear_stache') }}">Clear Stache</a>
                        </td>
                        <td class="cell-description">
                            <span class="column-label">Description</span> Clear the "Stache" cache.
                        </td>
                        <td class="column-actions"></td>
                    </tr>
                    <tr>
                        <td class="cell-name first-cell">
                            <span class="column-label">Name</span> <a href="{{ route('addons.clear_static') }}">Clear Static</a>
                        </td>
                        <td class="cell-description">
                            <span class="column-label">Description</span> Clear the Static Page Cache.
                        </td>
                        <td class="column-actions"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
@endsection
