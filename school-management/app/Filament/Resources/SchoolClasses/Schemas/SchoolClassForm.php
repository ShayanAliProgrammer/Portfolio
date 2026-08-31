<?php
namespace App\Filament\Resources\SchoolClasses\Schemas;
use App\Models\Teacher; use Filament\Forms\Components\Select; use Filament\Forms\Components\TextInput; use Filament\Forms\Components\Toggle; use Filament\Schemas\Schema;
class SchoolClassForm { public static function configure(Schema $schema): Schema { return $schema->components([
    TextInput::make('name')->required()->placeholder('Year 7 · Maple'), TextInput::make('grade_level')->required()->placeholder('Year 7'),
    TextInput::make('room_number')->required(), TextInput::make('capacity')->numeric()->required()->minValue(1)->default(30),
    Select::make('teacher_id')->label('Homeroom teacher')->options(fn() => Teacher::query()->where('is_active', true)->orderBy('last_name')->pluck('last_name','id')->map(fn($name,$id) => $name . ' (#' . $id . ')'))->searchable(), Toggle::make('is_active')->default(true),
]); } }