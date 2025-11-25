<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title gradient-text">Skills & Expertise</h2>
        <p class="section-subtitle">
          Technologies and tools I work with
        </p>
      </div>

      <div class="skills-filter">
        <button
          v-for="category in categories"
          :key="category"
          :class="['filter-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="skills-grid">
        <div
          v-for="(skill, index) in filteredSkills"
          :key="skill.id"
          class="skill-card card"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="skill-icon">{{ skill.icon }}</div>
          <h3 class="skill-title">{{ skill.title }}</h3>
          <p class="skill-description">{{ skill.description }}</p>
          
          <div class="skill-progress">
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
            <span class="progress-label">{{ skill.level }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PortfolioItemFactory from '@core/factories/PortfolioItemFactory';
import { sampleSkills } from '@core/data/portfolioData';
import type { ISkill } from '@core/interfaces/IComponent';

const factory = new PortfolioItemFactory();
const skills = factory.createMultiple<ISkill>('skill', sampleSkills);

const selectedCategory = ref<string>('All');

const categories = computed(() => {
  const cats = new Set(skills.map(s => s.category));
  return ['All', ...Array.from(cats)];
});

const filteredSkills = computed(() => {
  if (selectedCategory.value === 'All') {
    return skills;
  }
  return skills.filter(s => s.category === selectedCategory.value);
});
</script>

<style scoped>
.skills-section {
  background: var(--color-background);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.skills-filter {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-12);
  flex-wrap: wrap;
}

.filter-btn {
  padding: var(--spacing-2) var(--spacing-5);
  border-radius: var(--radius-full);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
  background: var(--color-surface);
  color: var(--color-text);
  font-size: var(--font-size-sm);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  box-shadow: var(--shadow-glow);
}

.filter-btn:hover {
  transform: translateY(-2px);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.skill-card {
  animation: fadeInUp 0.6s ease-out backwards;
}

.skill-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-4);
}

.skill-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-3);
}

.skill-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-4);
}

.skill-progress {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: var(--color-background);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-full);
  transition: width 1s ease-out;
  animation: shimmer 2s infinite;
}

.progress-label {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  min-width: 45px;
  text-align: right;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
