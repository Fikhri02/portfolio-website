<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title gradient-text">About Me</h2>
          <p class="about-description">
            I'm a passionate full-stack developer with over 5 years of experience
            building web applications that make a difference. I love turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>
          <p class="about-description">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge through
            technical writing and mentoring.
          </p>

          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-value">{{ animatedYears }}+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ animatedProjects }}+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ animatedClients }}+</div>
              <div class="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>

        <div class="about-timeline">
          <h3 class="timeline-title">Experience Timeline</h3>
          <div class="timeline">
            <div
              v-for="(experience, index) in experiences"
              :key="experience.id"
              class="timeline-item"
              :class="{ active: activeExperience === index }"
              @mouseenter="activeExperience = index"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-date">
                  {{ experience.startDate }} - {{ experience.endDate || 'Present' }}
                </div>
                <h4 class="timeline-position">{{ experience.position }}</h4>
                <div class="timeline-company">{{ experience.company }}</div>
                <ul v-if="activeExperience === index" class="timeline-achievements">
                  <li v-for="achievement in experience.achievements" :key="achievement">
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PortfolioItemFactory from '@core/factories/PortfolioItemFactory';
import { sampleExperiences } from '@core/data/portfolioData';
import type { IExperience } from '@core/interfaces/IComponent';

const factory = new PortfolioItemFactory();
const experiences = factory.createMultiple<IExperience>('experience', sampleExperiences);

const activeExperience = ref<number>(0);
const animatedYears = ref<number>(0);
const animatedProjects = ref<number>(0);
const animatedClients = ref<number>(0);

const animateValue = (target: any, endValue: number, duration: number = 2000) => {
  const startValue = 0;
  const startTime = Date.now();

  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    target.value = Math.floor(startValue + (endValue - startValue) * progress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

onMounted(() => {
  animateValue(animatedYears, 5);
  animateValue(animatedProjects, 50);
  animateValue(animatedClients, 30);
});
</script>

<style scoped>
.about-section {
  background: var(--color-background);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: start;
}

.about-description {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-6);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-top: var(--spacing-12);
}

.stat-item {
  text-align: center;
  padding: var(--spacing-6);
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-base);
}

.stat-item:hover {
  transform: translateY(-8px);
}

.stat-value {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-2);
}

.stat-label {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.timeline-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-8);
}

.timeline {
  position: relative;
  padding-left: var(--spacing-8);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-8);
  cursor: pointer;
  transition: all var(--transition-base);
}

.timeline-marker {
  position: absolute;
  left: calc(-1 * var(--spacing-8) - 6px);
  top: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 3px solid var(--color-primary);
  transition: all var(--transition-base);
}

.timeline-item.active .timeline-marker {
  background: var(--color-primary);
  box-shadow: 0 0 20px var(--color-primary);
  transform: scale(1.3);
}

.timeline-content {
  background: var(--color-surface);
  padding: var(--spacing-5);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.timeline-item:hover .timeline-content {
  transform: translateX(8px);
  box-shadow: var(--shadow-xl);
}

.timeline-date {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-2);
}

.timeline-position {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-1);
}

.timeline-company {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.timeline-achievements {
  margin-top: var(--spacing-4);
  padding-left: var(--spacing-5);
  list-style: none;
}

.timeline-achievements li {
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2);
}

.timeline-achievements li::before {
  content: '→';
  position: absolute;
  left: calc(-1 * var(--spacing-5));
  color: var(--color-primary);
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-12);
  }

  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>
