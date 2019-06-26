package com.aneta.shop.dto;

import com.aneta.shop.entity.OrderElement;
import com.aneta.shop.entity.User;

import java.time.LocalDateTime;
import java.util.Set;

public class OrderDTO extends AbstractDTO {

    private Set<OrderElement> orderElements;

    private LocalDateTime orderPlaceTime;

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
