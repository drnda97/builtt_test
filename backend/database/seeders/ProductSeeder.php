<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Array of sample products
        $products = [
            [
                'image' => 'images/product1.png',
                'name' => 'Product 1',
                'price' => 19.99,
                'description' => 'Description for Product 1',
                'discount' => 10.00,
            ],
            [
                'image' => 'images/product2.png',
                'name' => 'Product 2',
                'price' => 29.99,
                'description' => 'Description for Product 2',
                'discount' => 5.00,
            ],
            [
                'image' => 'images/product3.png',
                'name' => 'Product 3',
                'price' => 39.99,
                'description' => 'Description for Product 3',
                'discount' => 0.00,
            ],
            [
                'image' => 'images/product4.png',
                'name' => 'Product 4',
                'price' => 49.99,
                'description' => 'Description for Product 4',
                'discount' => 15.00,
            ],
            [
                'image' => 'images/product5.png',
                'name' => 'Product 5',
                'price' => 59.99,
                'description' => 'Description for Product 5',
                'discount' => 20.00,
            ],
            [
                'image' => 'images/product6.png',
                'name' => 'Product 6',
                'price' => 69.99,
                'description' => 'Description for Product 6',
                'discount' => 10.00,
            ],
            [
                'image' => 'images/product7.png',
                'name' => 'Product 7',
                'price' => 79.99,
                'description' => 'Description for Product 7',
                'discount' => 5.00,
            ],
            [
                'image' => 'images/product8.png',
                'name' => 'Product 8',
                'price' => 89.99,
                'description' => 'Description for Product 8',
                'discount' => 0.00,
            ],
            [
                'image' => 'images/product9.png',
                'name' => 'Product 9',
                'price' => 99.99,
                'description' => 'Description for Product 9',
                'discount' => 25.00,
            ],
            [
                'image' => 'images/product10.png',
                'name' => 'Product 10',
                'price' => 109.99,
                'description' => 'Description for Product 10',
                'discount' => 30.00,
            ],
            [
                'image' => 'images/product11.png',
                'name' => 'Product 11',
                'price' => 119.99,
                'description' => 'Description for Product 11',
                'discount' => 12.00,
            ],
            [
                'image' => 'images/product12.png',
                'name' => 'Product 12',
                'price' => 129.99,
                'description' => 'Description for Product 12',
                'discount' => 18.00,
            ],
            [
                'image' => 'images/product13.png',
                'name' => 'Product 13',
                'price' => 139.99,
                'description' => 'Description for Product 13',
                'discount' => 8.00,
            ],
            [
                'image' => 'images/product14.png',
                'name' => 'Product 14',
                'price' => 149.99,
                'description' => 'Description for Product 14',
                'discount' => 20.00,
            ],
            [
                'image' => 'images/product15.png',
                'name' => 'Product 15',
                'price' => 119.99,
                'description' => 'Description for Product 15',
                'discount' => 12.00,
            ],
            [
                'image' => 'images/product16.png',
                'name' => 'Awesome Product',
                'price' => 129.99,
                'description' => 'Description for Product',
                'discount' => 18.00,
            ],
        ];

        // Insert products into the database
        DB::table('products')->insert($products);
    }
}
