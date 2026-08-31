<?php

namespace App\Filament\Resources\Students\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;

class StudentsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('student_id')->label('ID')->searchable()->sortable(),
                TextColumn::make('full_name')->label('Student')->state(fn ($record) => $record->full_name)->searchable(['first_name', 'last_name'])->sortable(['first_name']),
                TextColumn::make('schoolClass.name')->label('Class')->placeholder('Unassigned')->sortable(),
                TextColumn::make('guardian_name')->label('Guardian')->searchable(),
                TextColumn::make('status')->badge()->color(fn (string $state): string => match ($state) { 'active' => 'success', 'inactive' => 'gray', 'graduated' => 'info', default => 'warning' }),
                TextColumn::make('date_of_birth')->date()->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')->options(['active' => 'Active', 'inactive' => 'Inactive', 'graduated' => 'Graduated']),
                SelectFilter::make('school_class_id')->label('Class')->relationship('schoolClass', 'name'),
            ])
            ->recordActions([EditAction::make()])
            ->toolbarActions([BulkActionGroup::make([DeleteBulkAction::make()])]);
    }
}

