package com.aneta.shop.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "carts")
public class Order extends AbstractEntity {

    @Fetch(FetchMode.SELECT)
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_order")
    @JsonIgnore
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
