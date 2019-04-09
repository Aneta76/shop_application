package com.aneta.shop.service;

import com.aneta.shop.dto.ProductDTO;
import com.aneta.shop.entity.Product;

import java.util.Collection;

public interface ProductService extends AbstractService<Product, ProductDTO> {

    Collection<ProductDTO> findAllProductsByCategoryId(Long id);
}



