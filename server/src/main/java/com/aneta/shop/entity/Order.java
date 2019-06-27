package com.aneta.shop.entity;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "carts")
public class Order extends AbstractEntity {

    @OneToMany(mappedBy = "order")
    private Set<OrderElement> orderElements;

    @Column
    private LocalDateTime orderPlaceTime;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private User user;


    public Set<OrderElement> getOrderElements() {
        return orderElements;
    }

    public void setOrderElements(Set<OrderElement> orderElements) {
        this.orderElements = orderElements;
    }

    public LocalDateTime getOrderPlaceTime() {
        return orderPlaceTime;
    }

    public void setOrderPlaceTime(LocalDateTime orderPlaceTime) {
        this.orderPlaceTime = orderPlaceTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
