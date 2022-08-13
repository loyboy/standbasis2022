@component('mail::message')
# {{ $details['title'] }}

<p>Welcome to PLENTI. Your account was created successfully.  You can verify your account later using the plenti app
</p>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
