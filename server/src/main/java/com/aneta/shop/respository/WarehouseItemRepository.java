package com.aneta.shop.respository;

import com.aneta.shop.entity.WarehouseItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseItemRepository extends JpaRepository<WarehouseItem, Long> {
}
