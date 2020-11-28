package com.udremaja.udremaja.base

import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.time.LocalDateTime
import javax.persistence.*

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
abstract class DatabaseEntity(
        @Column(nullable = false)
        val name: String
) {
    @Id
    @GeneratedValue
    var id: Long? = null

    @Column(nullable = false, updatable = false)
    @CreatedDate
    var createdDate: LocalDateTime? = null

    @Column
    @LastModifiedDate
    var modifiedDate: LocalDateTime? = null

    @Column
    @CreatedBy
    var createdBy: String? = null

    @Column
    @LastModifiedBy
    var lastModifiedBy: String? = null

}