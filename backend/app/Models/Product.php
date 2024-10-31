<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    // Specify the table if it's not the plural form of the model name
    protected $table = 'products';

    // Specify the fillable attributes for mass assignment
    protected $fillable = [
        'name',
        'price',
        'description',
        'discount',
        'image',
    ];

    // Optional: Specify hidden attributes (like if you're using timestamps)
    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
