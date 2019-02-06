package com.aneta.shop.resource;

import com.aneta.shop.dto.ProductDTO;
import com.aneta.shop.entity.Product;
import com.aneta.shop.service.ProductService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductResource extends AbstractResource <Product,ProductDTO> {

    private final ProductService productService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @Override
    public ProductService getService() {
        return productService;
    }
}