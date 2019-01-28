package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.ProductConverter;
import com.aneta.shop.dto.ProductDTO;
import com.aneta.shop.entity.Product;
import com.aneta.shop.respository.ProductRepository;
import com.aneta.shop.service.ProductService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl extends AbstractServiceImpl<Product,ProductDTO> implements ProductService {

    private final ProductRepository productRepository;
    private final ProductConverter productConverter;

    public ProductServiceImpl(ProductRepository productRepository, ProductConverter productConverter) {
        this.productRepository = productRepository;
        this.productConverter = productConverter;
    }

    protected JpaRepository<Product, Long> getRepository() {
        return productRepository;
    }

    protected Converter<Product, ProductDTO> getConverter() {
        return productConverter;
    }
}
