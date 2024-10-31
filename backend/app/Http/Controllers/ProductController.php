<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of all products.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        // Get all products and return as a resource collection
        $products = Product::all();

        return response()->json(ProductResource::collection($products), 200);
    }
}
