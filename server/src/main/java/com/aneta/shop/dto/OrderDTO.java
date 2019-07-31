package com.aneta.shop.dto;

import java.time.LocalDateTime;
import java.util.Set;

public class OrderDTO extends AbstractDTO {

    private Set<OrderElementDTO> orderElements;

    private LocalDateTime orderPlaceTime;

    private UserDTO user;

    private DeliveryAddressDTO deliveryAddress;

    public DeliveryAddressDTO getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddressDTO(DeliveryAddressDTO deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Set<OrderElementDTO> getOrderElements() {
        return orderElements;
    }

    public void setOrderElements(Set<OrderElementDTO> orderElements) {
        this.orderElements = orderElements;
    }

    public LocalDateTime getOrderPlaceTime() {
        return orderPlaceTime;
    }

    public void setOrderPlaceTime(LocalDateTime orderPlaceTime) {
        this.orderPlaceTime = orderPlaceTime;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }
}
