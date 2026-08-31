<?php
namespace App\Filament\Resources\Announcements\Schemas;
use Filament\Forms\Components\DateTimePicker; use Filament\Forms\Components\RichEditor; use Filament\Forms\Components\Select; use Filament\Forms\Components\TextInput; use Filament\Forms\Components\Toggle; use Filament\Schemas\Schema;
class AnnouncementForm { public static function configure(Schema $schema): Schema { return $schema->components([
    TextInput::make('title')->required()->maxLength(160), Select::make('audience')->options(['Everyone'=>'Everyone','Families'=>'Families','Teachers'=>'Teachers','Students'=>'Students'])->default('Everyone')->required(), RichEditor::make('body')->required()->columnSpanFull(), DateTimePicker::make('published_at')->default(now()), Toggle::make('is_pinned')->label('Pin to dashboard'),
]); } }