package com.aneta.shop.converter;

import com.aneta.shop.dto.ProductCategoryDTO;
import com.aneta.shop.entity.ProductCategory;
import org.springframework.stereotype.Component;

@Component
public class ProductCategoryConverter implements Converter<ProductCategory, ProductCategoryDTO> {

    @Override
    public ProductCategory convertToEntity(ProductCategoryDTO dto) {
        ProductCategory productCategory = new ProductCategory();
        productCategory.setId(dto.getId());
        productCategory.setName(dto.getName());
        return productCategory;
    }

    @Override
    public ProductCategoryDTO convertToDTO(ProductCategory entity) {
        ProductCategoryDTO productCategoryDTO = new ProductCategoryDTO();
        productCategoryDTO.setId(entity.getId());
        productCategoryDTO.setName(entity.getName());
        return productCategoryDTO;
    }
}
