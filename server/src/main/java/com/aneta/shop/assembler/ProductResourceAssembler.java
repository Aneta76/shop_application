package com.aneta.shop.assembler;

import com.aneta.shop.Resource.ProductResource;
import com.aneta.shop.entity.Product;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceAssembler;
import org.springframework.stereotype.Component;

import static org.springframework.hateoas.core.DummyInvocationUtils.methodOn;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

@Component
public class ProductResourceAssembler implements ResourceAssembler<Product,Resource<Product>> {

    @Override
    public Resource<Product> toResource(Product product) {
        return new Resource<>(product,
                linkTo(methodOn(ProductResource.class).getProduct(product.getId())).withSelfRel(),
                linkTo(methodOn(ProductResource.class).getAllProducts()).withRel("products"));
    }
}

