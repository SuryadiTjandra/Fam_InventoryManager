package com.udremaja.udremaja

import com.udremaja.udremaja.core.address.Address
import com.udremaja.udremaja.core.address.BusinessPartnerRepository
import com.udremaja.udremaja.core.company.Company
import com.udremaja.udremaja.core.company.CompanyBranch
import com.udremaja.udremaja.core.company.CompanyBranchRepository
import com.udremaja.udremaja.core.company.CompanyRepository
import com.udremaja.udremaja.core.user.AppUser
import com.udremaja.udremaja.core.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Component

@Component
@Profile("dev")
class DevDatabaseLoader @Autowired constructor(
        val companyRepository: CompanyRepository,
        val companyBranchRepository: CompanyBranchRepository,
        val businessPartnerRepository: BusinessPartnerRepository,
        val userRepository: UserRepository
): CommandLineRunner {
    override fun run(vararg args: String?) {
        val company = companyRepository.save(Company("UD Remaja", Address("Jalan Pesapen kali 16A", "Surabaya", "Jawa Timur", "12345")))
        val branch1 = companyBranchRepository.save(CompanyBranch("Pesapen", company))
        val branch2 = companyBranchRepository.save(CompanyBranch("Kalianak", company, Address("Jalan Kalianak", "Surabaya", null, "23456")))

        val user = userRepository.save(AppUser("dev", "dev", "dev@dev.com", company))
    }
}