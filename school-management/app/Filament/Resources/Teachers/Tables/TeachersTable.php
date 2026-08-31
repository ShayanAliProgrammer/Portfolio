<?php
namespace App\Filament\Resources\Teachers\Tables;
use Filament\Actions\BulkActionGroup; use Filament\Actions\DeleteBulkAction; use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn; use Filament\Tables\Filters\TernaryFilter; use Filament\Tables\Table;
class TeachersTable { public static function configure(Table $table): Table { return $table->columns([
    TextColumn::make('employee_id')->label('ID')->searchable()->sortable(),
    TextColumn::make('full_name')->label('Teacher')->state(fn($record) => $record->full_name)->searchable(['first_name','last_name']),
    TextColumn::make('subject_specialty')->label('Specialty')->searchable(), TextColumn::make('email')->copyable(),
    TextColumn::make('schoolClasses_count')->counts('schoolClasses')->label('Classes'), TextColumn::make('is_active')->label('Status')->badge()->formatStateUsing(fn($state) => $state ? 'Active' : 'Inactive')->color(fn($state) => $state ? 'success' : 'gray'),
])->filters([TernaryFilter::make('is_active')->label('Active teachers')])->recordActions([EditAction::make()])->toolbarActions([BulkActionGroup::make([DeleteBulkAction::make()])]); } }