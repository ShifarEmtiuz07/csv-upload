import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'employees' })
export class CsvUpload {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  employeeId: string;
  @Column({ type: 'varchar', nullable: true })
  name: string;
  @Column({ type: 'varchar', nullable: true })
  firstName: string;
  @Column({ type: 'varchar', nullable: true })
  lastName: string;
  @Column({ type: 'varchar', nullable: true })
  presentAddress: string;
  @Column({ type: 'varchar', nullable: true })
  permanentAddress: string;
  @Column({ type: 'varchar', nullable: true })
  nationalId: string;
  @Column({ type: 'varchar', nullable: true })
  gender: string;
  @Column({ type: 'varchar', nullable: true })
  phoneNumber: string;
  @Column({ type: 'varchar', nullable: true })
  additionalNumber: string;
  @Column({ type: 'varchar', nullable: true })
  personalEmail: string;
}
