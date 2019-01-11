package com.aneta.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Table;
import java.math.BigDecimal;

@Entity
@Table
public class WarehouseItem extends AbstractEntity {

    @Column
    @JoinColumn(name = "product_id")
    private Product product;

    @Column
    private BigDecimal price;

    @Column
    private Long quantity;

}
