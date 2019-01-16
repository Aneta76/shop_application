package com.aneta.shop.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "warehouse")
public class WarehouseItem extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "id_product")
    private Product product;

    @Column
    private BigDecimal price;

    @Column
    private Long quantity;


    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Long getQuantity() {
        return quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
}
