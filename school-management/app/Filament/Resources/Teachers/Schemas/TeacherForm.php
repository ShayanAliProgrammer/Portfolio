<?php
namespace App\Filament\Resources\Teachers\Schemas;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
class TeacherForm {
    public static function configure(Schema $schema): Schema { return $schema->components([
        TextInput::make('employee_id')->label('Employee ID')->required()->unique(ignoreRecord: true),
        TextInput::make('first_name')->required(), TextInput::make('last_name')->required(),
        TextInput::make('email')->email()->required()->unique(ignoreRecord: true), TextInput::make('phone')->tel(),
        TextInput::make('subject_specialty')->label('Specialty')->required(), DatePicker::make('joined_on')->required(),
        Toggle::make('is_active')->label('Active')->default(true),
    ]); }
}