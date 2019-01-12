package com.aneta.shop.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table
public class Order extends AbstractEntity {

    @OneToMany(mappedBy = "order")
    private Set<OrderElement> orderElements;

    @Column
    private LocalDateTime orderPlaceTime;

    @ManyToOne
    @JoinColumn (name = "id_user")
    private User user;




}
