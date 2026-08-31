<?php
namespace App\Filament\Resources\Attendances\Schemas;
use Filament\Forms\Components\DatePicker; use Filament\Forms\Components\Select; use Filament\Forms\Components\Textarea; use Filament\Schemas\Schema;
class AttendanceForm { public static function configure(Schema $schema): Schema { return $schema->components([
    Select::make('student_id')->relationship('student','first_name')->getOptionLabelFromRecordUsing(fn($record) => $record->full_name . ' · ' . $record->student_id)->searchable(['first_name','last_name','student_id'])->preload()->required(),
    DatePicker::make('date')->default(now())->required(), Select::make('status')->options(['present'=>'Present','late'=>'Late','absent'=>'Absent','excused'=>'Excused'])->required(), Textarea::make('notes')->rows(3),
]); } }