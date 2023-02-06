package com.isf6.backend.domain.repository;

import com.isf6.backend.domain.entity.LiveRequest;
import com.isf6.backend.domain.entity.Wish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LiveRequestRepository extends JpaRepository<LiveRequest, Object> {
    @Query("SELECT COUNT(*) FROM LiveRequest lr WHERE lr.product.id = :productId")
    Long getLiveRequestCnt(@Param("productId") long productId);

    @Query("SELECT lr FROM LiveRequest lr WHERE lr.product.id = :productId and lr.user.userCode = :userCode")
    LiveRequest getLiveRequest(@Param("productId") long productId, @Param("userCode") long userCode);
}