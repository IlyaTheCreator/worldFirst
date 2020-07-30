<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        {{--        font       --}}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
    </head>
    <body>
       <div id="app"></div>

       <script>
           window.Laravel = {
               csrfToken: "{{ csrf_token() }}",
               baseURL: "{{ URL::to('/') }}",
               storagePath: "{{ storage_path() }}",
               publicPath: "{{ public_path() }}"
           }
       </script>

       <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
