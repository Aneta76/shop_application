package com.aneta.shop.Resource;

import com.aneta.shop.assembler.ProductResourceAssembler;
import com.aneta.shop.entity.Product;
import com.aneta.shop.service.ProductService;

import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.hateoas.core.DummyInvocationUtils.methodOn;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

@RestController
@RequestMapping("/api")
public class ProductResource {

    private ProductService productService;
    private ProductResourceAssembler productResourceAssembler;

    public ProductResource(ProductService productService, ProductResourceAssembler productResourceAssembler) {
        this.productService = productService;
        this.productResourceAssembler = productResourceAssembler;
    }

    @GetMapping(path = "/products")
    public Resources<Resource<Product>> getAllProducts() {
        Collection<Product> all = productService.displayAll();
        List<Product> allProducts = new LinkedList<>();
        for (Product product : all) {
            allProducts.add(product);
        }
        List<Resource<Product>> products = allProducts.stream()
                .map(productResourceAssembler::toResource)
                .collect(Collectors.toList());

        return new Resources<>(products, linkTo(methodOn(ProductResource.class).getAllProducts()).withSelfRel());
    }

    @GetMapping(path = "/products/{id}")
    public Resource<Product> getProduct(@PathVariable Long id) {
        Product oneProduct = productService.getOneProduct(id);
        return productResourceAssembler.toResource(oneProduct);
    }
}
