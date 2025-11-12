@extends('layout')

@section('title', 'Home - Life Coach Pro')

@section('content')
<div class="bg-blue-600 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Welcome to Life Coach Pro</h1>
        <p class="text-xl mb-8">Transform your life with professional coaching</p>
        <a href="/services" class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Explore Services
        </a>
    </div>
</div>

<div class="max-w-7xl mx-auto px-4 py-16">
    <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
            <h3 class="text-xl font-semibold mb-4">Goal Achievement</h3>
            <p class="text-gray-600">Strategic planning and milestone tracking</p>
        </div>
        <div class="text-center">
            <h3 class="text-xl font-semibold mb-4">Career Growth</h3>
            <p class="text-gray-600">Professional development and leadership skills</p>
        </div>
        <div class="text-center">
            <h3 class="text-xl font-semibold mb-4">Personal Development</h3>
            <p class="text-gray-600">Mindset transformation and relationship mastery</p>
        </div>
    </div>
</div>
@endsection