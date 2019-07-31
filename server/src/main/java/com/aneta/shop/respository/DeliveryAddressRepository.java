package com.aneta.shop.respository;

import com.aneta.shop.entity.DeliveryAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryAddressRepository extends JpaRepository<DeliveryAddress,Long> {
}
