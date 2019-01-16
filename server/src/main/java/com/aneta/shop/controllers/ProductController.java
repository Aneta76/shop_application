package com.aneta.shop.controllers;

import com.aneta.shop.entity.Product;
import com.aneta.shop.service.ProductService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(path = "/product/{id}")
    public Product getProduct(@PathVariable Long id) {
        Product oneProduct = productService.getOneProduct(id);
        return oneProduct;
    }
}

