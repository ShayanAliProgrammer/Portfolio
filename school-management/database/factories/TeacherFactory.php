<?php

namespace Database\Factories;

use App\Models\Teacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Teacher>
 */
class TeacherFactory extends Factory
{
    protected $model = Teacher::class;

    public function definition(): array
    {
        return [
            'employee_id' => 'EMP-' . fake()->unique()->numberBetween(100, 999),
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'subject_specialty' => fake()->randomElement(['Mathematics', 'English', 'Science', 'History', 'Arts']),
            'joined_on' => fake()->dateTimeBetween('-8 years', '-1 month')->format('Y-m-d'),
            'is_active' => true,
        ];
    }
}
