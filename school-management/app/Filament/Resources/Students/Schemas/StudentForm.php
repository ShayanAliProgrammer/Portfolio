<?php

namespace App\Filament\Resources\Students\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

class StudentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            TextInput::make('student_id')->label('Student ID')->required()->unique(ignoreRecord: true)->maxLength(20),
            Select::make('school_class_id')->label('Class')->relationship('schoolClass', 'name')->searchable()->preload(),
            TextInput::make('first_name')->required()->maxLength(100),
            TextInput::make('last_name')->required()->maxLength(100),
            TextInput::make('email')->email()->unique(ignoreRecord: true),
            TextInput::make('phone')->tel(),
            DatePicker::make('date_of_birth')->required()->maxDate(now()),
            Select::make('gender')->options(['Female' => 'Female', 'Male' => 'Male', 'Non-binary' => 'Non-binary'])->required(),
            TextInput::make('guardian_name')->required(),
            TextInput::make('guardian_phone')->required()->tel(),
            Select::make('status')->options(['active' => 'Active', 'inactive' => 'Inactive', 'graduated' => 'Graduated'])->default('active')->required(),
            Textarea::make('notes')->disabled()->dehydrated(false)->helperText('Student notes can be added in the pastoral care module.'),
        ]);
    }
}

