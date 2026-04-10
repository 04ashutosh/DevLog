package com.devlog.api.repository;

import com.devlog.api.domain.LogEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface LogEntryRepository extends JpaRepository<LogEntry, UUID> {
    Optional<LogEntry> findByLogDate(LocalDate logDate);
    List<LogEntry> findByLogDateBetweenOrderByLogDateDesc(LocalDate start, LocalDate end);
}
