<?php
namespace Database\Seeders;
use App\Models\Announcement; use App\Models\Attendance; use App\Models\SchoolClass; use App\Models\Student; use App\Models\Teacher; use App\Models\User; use Illuminate\Database\Seeder; use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder { public function run(): void {
    $admin = User::factory()->create(['name'=>'Avery Morgan','email'=>'admin@northstar.test','password'=>Hash::make('password')]);
    $teachers = Teacher::factory(6)->create();
    $classes = collect(['Year 7 · Maple','Year 8 · Cedar','Year 9 · Oak','Year 10 · Birch','Year 11 · Rowan'])->map(fn($name,$i) => SchoolClass::create(['name'=>$name,'grade_level'=>'Year '.($i+7),'room_number'=>'B'.(101+$i),'capacity'=>28,'teacher_id'=>$teachers[$i % $teachers->count()]->id]));
    $students = Student::factory(48)->create()->each(fn($student,$i) => $student->update(['school_class_id'=>$classes[$i % $classes->count()]->id]));
    foreach ($students->take(36) as $i => $student) Attendance::create(['student_id'=>$student->id,'date'=>now()->toDateString(),'status'=>$i % 9 === 0 ? 'late' : ($i % 11 === 0 ? 'absent' : 'present')]);
    Announcement::create(['author_id'=>$admin->id,'title'=>'Welcome to the new school term','body'=>'We are excited to welcome every learner and family back to Northstar Academy.','audience'=>'Everyone','published_at'=>now(),'is_pinned'=>true]);
    Announcement::create(['author_id'=>$admin->id,'title'=>'Family information evening','body'=>'Join us Thursday at 18:00 in the main hall for curriculum updates and Q&A.','audience'=>'Families','published_at'=>now()->subDay()]);
} }