package com.aneta.shop.service;

import com.aneta.shop.entity.Product;

import java.util.Collection;

public interface ProductService {

    Collection displayAll();

    Product addProduct(Product product);

    Product getOneProduct(Long id);

    Product updateProduct(Product product);

    void deleteProduct(Long id);

}
