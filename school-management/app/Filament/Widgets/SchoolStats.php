<?php
namespace App\Filament\Widgets;
use App\Models\Announcement; use App\Models\Attendance; use App\Models\SchoolClass; use App\Models\Student; use App\Models\Teacher; use Filament\Widgets\StatsOverviewWidget as BaseWidget; use Filament\Widgets\StatsOverviewWidget\Stat;
class SchoolStats extends BaseWidget { protected function getStats(): array { $today = now()->toDateString(); return [
    Stat::make('Active students', Student::where('status','active')->count())->description('Enrolled this term')->descriptionIcon('heroicon-m-academic-cap')->color('primary'),
    Stat::make('Teaching staff', Teacher::where('is_active',true)->count())->description('Available today')->descriptionIcon('heroicon-m-user-group')->color('info'),
    Stat::make('Attendance today', Attendance::whereDate('date',$today)->whereIn('status',['present','late'])->count())->description('Present or late')->descriptionIcon('heroicon-m-check-circle')->color('success'),
    Stat::make('Open classes', SchoolClass::where('is_active',true)->count())->description('Across the school')->descriptionIcon('heroicon-m-building-library')->color('warning'),
]; } }