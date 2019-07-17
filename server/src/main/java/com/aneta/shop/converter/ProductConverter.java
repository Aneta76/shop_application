package com.aneta.shop.converter;

import com.aneta.shop.dto.ProductDTO;
import com.aneta.shop.entity.Product;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter implements Converter<Product, ProductDTO> {

    private final ProductCategoryConverter productCategoryConverter;

    public ProductConverter(ProductCategoryConverter productCategoryConverter) {
        this.productCategoryConverter = productCategoryConverter;
    }

    @Override
    public Product convertToEntity(ProductDTO dto) {
        Product product = new Product();
        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setPrice(dto.getPrice());
        product.setCount(dto.getCount());
        product.setDescription(dto.getDescription());
        product.setCount(dto.getCount());
        product.setCategory(productCategoryConverter.convertToEntity(dto.getCategory()));
        return product;
    }

    @Override
    public ProductDTO convertToDTO(Product entity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(entity.getId());
        productDTO.setName(entity.getName());
        productDTO.setDescription(entity.getDescription());
        productDTO.setPrice(entity.getPrice());
        productDTO.setCount(entity.getCount());
        productDTO.setCount(entity.getCount());
        productDTO.setCategory(productCategoryConverter.convertToDTO(entity.getCategory()));
        return productDTO;
    }
}
