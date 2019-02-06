package com.aneta.shop.resource;

import com.aneta.shop.dto.ProductCategoryDTO;
import com.aneta.shop.entity.ProductCategory;
import com.aneta.shop.service.ProductCategoryService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/category")
public class ProductCategoryResource extends AbstractResource<ProductCategory, ProductCategoryDTO> {

    private final ProductCategoryService productCategoryService;

    public ProductCategoryResource(ProductCategoryService productCategoryService) {
        this.productCategoryService = productCategoryService;
    }

    @Override
    public ProductCategoryService getService() {
        return productCategoryService;
    }
}
