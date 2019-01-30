package com.aneta.shop.service.Impl;

import com.aneta.shop.converter.Converter;
import com.aneta.shop.converter.ProductCategoryConverter;
import com.aneta.shop.dto.ProductCategoryDTO;
import com.aneta.shop.entity.ProductCategory;
import com.aneta.shop.respository.ProductCategoryRepository;
import com.aneta.shop.service.ProductCategoryService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductCategoryServiceImpl extends AbstractServiceImpl<ProductCategory, ProductCategoryDTO> implements ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;
    private final ProductCategoryConverter productCategoryConverter;

    public ProductCategoryServiceImpl(ProductCategoryRepository productCategoryRepository, ProductCategoryConverter productCategoryConverter) {
        this.productCategoryRepository = productCategoryRepository;
        this.productCategoryConverter = productCategoryConverter;
    }

    @Override
    protected JpaRepository<ProductCategory, Long> getRepository() {
        return productCategoryRepository;
    }

    @Override
    protected Converter<ProductCategory, ProductCategoryDTO> getConverter() {
        return productCategoryConverter;
    }
}
