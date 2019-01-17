package com.aneta.shop.service.Impl;

import com.aneta.shop.entity.Product;
import com.aneta.shop.respository.ProductRepository;
import com.aneta.shop.service.ProductService;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.LinkedList;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Collection <Product> displayAll() {
        Iterable<Product> allProducts = productRepository.findAll();
        LinkedList <Product> list = new LinkedList();
        for(Product product : allProducts){
            list.add(product);
        }
        return list;
    }

    @Override
    public Product addProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    @Override
    public Product getOneProduct(Long id) {
        Optional<Product> oneProduct = productRepository.findById(id);
        return oneProduct.get();
    }

    @Override
    public Product updateProduct(Product product) {
        productRepository.save(product);
        return product;
    }

    @Override
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
