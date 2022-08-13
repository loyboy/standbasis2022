@component('mail::message')
# {{ $details['title'] }}

<p>kindly confirm your account by entering the code below
    <br><br> <strong>{{ $details['token'] }}</strong> <br><br> If you did not make this request. kindly ignore
</p>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
