package com.aneta.shop.controllers;

import com.aneta.shop.entity.Product;
import com.aneta.shop.service.ProductService;
import org.springframework.hateoas.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

import static org.springframework.hateoas.core.DummyInvocationUtils.methodOn;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

@RestController
@RequestMapping("/api")
public class ProductController {

    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(path = "/product")
    List<Product> getAllProducts() {
        Collection <Product> all = productService.displayAll();
        LinkedList<Product> allProducts = new LinkedList<>();
        for (Product product : all) {
            allProducts.add(product);
        }
        return allProducts;
    }

    @GetMapping(path = "/product/{id}")
    Resource<Product> getProduct(@PathVariable Long id) {
        Product oneProduct = productService.getOneProduct(id);

        return new Resource<>(oneProduct, linkTo(methodOn(ProductController.class).getProduct(id)).withSelfRel());

    }
}

//     return new Resource<>(oneProduct, linkTo(methodOn(ProductController.class).getProduct(id)).withSelfRel(),
//        linkTo(methodOn(ProductController.class).getAllProducts()).withRel("product"));
