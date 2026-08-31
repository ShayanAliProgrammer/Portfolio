<?php
namespace App\Filament\Resources\Announcements\Tables;
use Filament\Actions\BulkActionGroup; use Filament\Actions\DeleteBulkAction; use Filament\Actions\EditAction; use Filament\Tables\Columns\TextColumn; use Filament\Tables\Filters\TernaryFilter; use Filament\Tables\Table;
class AnnouncementsTable { public static function configure(Table $table): Table { return $table->defaultSort('published_at','desc')->columns([
    TextColumn::make('title')->searchable()->weight('bold'), TextColumn::make('audience')->badge(), TextColumn::make('published_at')->dateTime()->sortable(), TextColumn::make('is_pinned')->label('Pinned')->formatStateUsing(fn($state) => $state ? 'Pinned' : '—')->color(fn($state) => $state ? 'warning' : 'gray'), TextColumn::make('author.name')->label('Published by'),
])->filters([TernaryFilter::make('is_pinned')])->recordActions([EditAction::make()])->toolbarActions([BulkActionGroup::make([DeleteBulkAction::make()])]); } }